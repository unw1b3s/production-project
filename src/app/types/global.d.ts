declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module "*.module.css";

declare module '*.css' {
    interface IClassNames {
        [classNames: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.png" {
    const value: unknown;
    export default value;
}

declare const __IS_DEV__: boolean;
