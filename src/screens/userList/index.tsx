import React, {FC} from 'react';
import {View} from 'react-native';
import SingleUser from './orgnization/SingleUser';
import styles from './styles';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../components/constants/colors';
import {FlashList} from '@shopify/flash-list';
import EmptyCompont from './orgnization/emptyCompont';
import {
  getNextPageParam,
  getUserDetails,
} from './api_hooks/getUserDetails/usegetUserDetails';
import Footer from './orgnization/footer';
import {useInfiniteQuery} from '@tanstack/react-query';

const UserList: FC = () => {
  const {
    data,
    isLoading,
    refetch,
    isRefetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['userDetails'],
    queryFn: getUserDetails,
    initialPageParam: 1,
    getNextPageParam: getNextPageParam,
  });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size={20} color={colors.black} />
        </View>
      ) : (
        <FlashList
          renderItem={({index, item}) => {
            return <SingleUser index={index} item={item} />;
          }}
          data={data?.pages.flatMap((page: any) => page?.data)}
          onRefresh={refetch}
          refreshing={isRefetching}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={EmptyCompont}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListFooterComponent={() => (
            <Footer
              onPress={loadMore}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
            />
          )}
          estimatedItemSize={500}
        />
      )}
    </View>
  );
};

export default UserList;
