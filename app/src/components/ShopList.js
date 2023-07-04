import React from 'react';

class ShopList extends React.Component {
  render() {
    return (
      <div>
        {this.props.shops.map((shop) => (
          <div key={shop.id}>
            <h2>{shop.name}</h2>
            <p>{shop.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ShopList;
