const SimpleComponent = ({type, itemObj}) => {
    const number=itemObj.ItemsQuantity;
    const obj=itemObj.InstalledItems[0];
    return <div className="SimpleComponent">{type} {number}xS{obj.Size} {obj.Name} {obj.Class}-{obj.Grade}</div>
}

export default SimpleComponent;