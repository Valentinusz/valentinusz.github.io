import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconDanger from '@theme/Admonition/Icon/Danger';

const defaultProps = {
    icon: <IconDanger />,
    title: (
        <Translate
            id="theme.admonition.danger"
            description="The default label used for the Danger admonition (:::danger)">
            danger
        </Translate>
    ),
};


const infimaClassName = 'alert alert--example';

function Example(props) {
    return (
        <AdmonitionLayout
            {...defaultProps}
            {...props}
            className={clsx(infimaClassName, props.className)}>
            {props.children}
        </AdmonitionLayout>
    );
}

const AdmonitionTypes = {
    ...DefaultAdmonitionTypes,
    'example': Example,
};

export default AdmonitionTypes;
