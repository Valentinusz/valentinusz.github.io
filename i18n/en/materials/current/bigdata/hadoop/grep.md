---
sidebar_position: 3
title: "grep"
---

:::info
A feladathoz kapcsolódó kódok megtalálhatók a [GitHub repoban](https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/grep).
:::

Készítsünk egy MapReduce programot, amely egy karaktersorozatot keres a bemeneti fájlban. Írjuk ki azokat a sorokat a
bementi fájlból, amelyek tartalmazzák a keresett karaktersorozatot.

Nem nehéz meggondolni, hogy a feladat megoldásához nem szükséges külön reducer. A MapReduce lehetővé teszi és Reduce
fázis kihagyását:

```java title='src/grep/GrepDriver.java'
public class GrepDriver {
	public static void main(String[] args) throws Exception {
		Configuration conf = new Configuration();
		Job job = Job.getInstance(conf, "grep");
		job.setJarByClass(GrepDriver.class);
		job.setMapperClass(GrepMapper.class);

        // highlight-next-line
		job.setNumReduceTasks(0); // reducer fázis kikapcsolása

		job.setOutputKeyClass(LongWritable.class);
		job.setOutputValueClass(Text.class);

		FileInputFormat.setInputPaths(job, new Path("input"));
		FileOutputFormat.setOutputPath(job, new Path("out"));

		if (!job.waitForCompletion(true)) return;
	}
}
```

```java title='src/grep/GrepMapper.java'
public class GrepMapper extends Mapper<LongWritable, Text, NullWritable, Text> {
	public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {
		if (ivalue.toString().contains("sütsz")) {
		    // NullWritable a leghatékonyabb, ha olyan kulcs/érték kell, ami nem fontos
			context.write(NullWritable.get(), ivalue);
		}
	}
}
```
