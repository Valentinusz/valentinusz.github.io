import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import AdmonitionIconExample from "../Icon/Example";
const infimaClassName = 'alert alert--example';

const defaultProps = {
  icon: <AdmonitionIconExample/>,
  title: (
    <Translate
      id="theme.admonition.example"
      description="The default label used for the Example admonition (:::example)">
      example
    </Translate>
  ),
};

export default function AdmonitionTypeExample(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
