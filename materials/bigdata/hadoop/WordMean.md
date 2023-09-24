---
sidebar_position: 4
title: "WordMean"
---

:::info
A feladathoz kapcsolódó kódok megtalálhatók a
[GitHub repoban](https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/wordMean).
:::

Adjuk meg, hogy a bemeneti fájlban mekkora a szavak átlagos hossza!

A keressett adat meghatározásához két adatra van szükségünk, a **karakterek számára** és a **szavak számárá**.

A feladat bemenete egy fájl, a leképező alap bemeneti típusaihoz nem kell hozzányúlnunk. Mivel a kimenetben egyetlen
aggregált értéket akarunk, ezért fontos, hogy minden kulcs-érték pár egy Reducer-hez kerüljön. Mivel az alap hash alapú
shuffle algoritmust használjuk, ezért csak azt kell elérnünk, hogy a `Mapper` által kiadott párok kulcsa azonos legyen.

Ehhez én kulcsként, a `NullWritable` osztályt fogom használni:
```java title="wordMean/src/wordmean/WordMeanMapper.java"
public class WordMeanMapper extends Mapper<LongWritable, Text, NullWritable, IntWritable> {
	public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {
		for (String word : ivalue.toString().replaceAll("[,.?!:]", " ").split(" ")) {
			// NullWritable singleton, ezért az, hogy nem mentjük ki változóba nem ront a teljesítményen
			context.write(NullWritable.get(), new IntWritable(word.length()));
		}
	}
}
```
Ennek hatására a `Reducer` pontosan szavak száma darab párt fog kapni, ahol az érték az adott szó hossza.

```java title="wordMean/src/wordmean/WordMeanReducer.java"
public class WordMeanReducer extends Reducer<NullWritable, IntWritable, NullWritable, DoubleWritable> {
	// figyeljünk a reduce típusszignatúrájára, _key típusának meg kell egyeznie az osztály első típusapraméterével
	// az iterable típusparaméterének pedig az osztály második típusparaméterével
	public void reduce(NullWritable _key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
		int wordCount = 0;
		int wordLengthSum = 0;
		
		for (IntWritable entryValue : values) {
			wordCount++;
			wordLengthSum += entryValue.get();
		}
		
		context.write(NullWritable.get(), new DoubleWritable((double) wordLengthSum / wordCount));
	}
}
```
A `Driver` osztályban minimális változtatásokat kell megtennünk:
```java
public class WordMeanDriver {
	public static void main(String[] args) throws Exception {
		System.setProperty("hadoop.tmp.dir", "c:\\BigData\\tmp\\hadoop-xx");
		System.setProperty("hadoop.home.dir", "c:\\BigData\\hadoop-3.3.6");
		
		Configuration conf = new Configuration();
		Job job = Job.getInstance(conf, "wordMean");
		job.setJarByClass(wordmean.WordMeanDriver.class);

		job.setMapperClass(wordmean.WordMeanMapper.class);
		job.setReducerClass(wordmean.WordMeanReducer.class);
		
		// highlight-start
		// alapértelmezetten a Map output típusai megegyeznek a teljes output típusaival
		// esetünkben ez nem így van ezért explicit meg kell adnunk őket
		job.setMapOutputKeyClass(NullWritable.class);
		job.setMapOutputValueClass(IntWritable.class);
		// highlight-end
		
		job.setOutputKeyClass(NullWritable.class);
		job.setOutputValueClass(DoubleWritable.class);

		FileInputFormat.setInputPaths(job, new Path("input"));
		FileOutputFormat.setOutputPath(job, new Path("out"));
		
		if (!job.waitForCompletion(true)) return;
	}
}
```