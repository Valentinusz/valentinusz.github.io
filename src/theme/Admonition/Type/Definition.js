import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import AdmonitionIconDefinition from "../Icon/Definition";
const infimaClassName = 'alert alert--definition';

const defaultProps = {
  icon: <AdmonitionIconDefinition/>,
  title: (
    <Translate
      id="theme.admonition.definition"
      description="The default label used for the Definition admonition (:::definition)">
      definition
    </Translate>
  ),
};

export default function AdmonitionTypeDefinition(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
