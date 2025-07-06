import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from '../../../components/molecules'
import { theme } from '../../../styles/theme'
import { SeperatorView, NoDataImage } from './styles'
import { Text, Container } from '../../atoms'
import noDataFound from '../../../../assets/no-data-found.png'

export const GridList = ({ data, type, loading }) => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeperatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={500}>
          <NoDataImage resizeMode="contain" source={noDataFound} />
          <Text fontFamily="semiBold" size={14} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado.`}
          </Text>
        </Container>
      )}
      contentContainerStyle={{
        paddingTop: theme.metrics.px(12),
        paddingLeft: theme.metrics.px(24),
        paddingBottom: theme.metrics.px(24),
      }}
    />
  )
}
