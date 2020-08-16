
const WithSeparators = (props) => {
    const {
        children: components,
        separator,
    } = props;

    const componentsNew = [];

    for (let i = 0; i < components.length - 1; ++i) {
        componentsNew.push(components[i]);
        componentsNew.push(separator);
    }
    componentsNew.push(components[components.length - 1]);

    return componentsNew;
};

export default WithSeparators;
