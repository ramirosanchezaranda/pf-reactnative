import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ProductItem } from './../../components';
import { selectProduct, filterProducts } from './../../store/actions';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.categories.selected.id);
  const products = useSelector((state) => state.products.filteredProducts);

  const handlerSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', {
      productName: item.name,
    });
  };

  useEffect(() => {
    dispatch(filterProducts(categoryId));
  }, []);

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={handlerSelected} />;

  return <FlatList data={products} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />;
};

export default Products;
