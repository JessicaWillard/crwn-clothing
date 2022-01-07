import React, { Component } from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
