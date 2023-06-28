import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from './../../store/actions';
import { styles } from './styles';
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const CATEGORIES = useSelector((state) => state.categories.data);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      categoryName: item.name,
    });
  };

  const renderItem = ({ item }) => <CategoryItem category={item} onSelected={onSelected} />;

  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} keyExtractor={(category) => category.id} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default Categories;
