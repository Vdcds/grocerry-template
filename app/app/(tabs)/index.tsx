import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { CartProvider } from '@/contexts/CartContext';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { featuredProducts, categories } from '@/data/products';

function HomeContent() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning! 👋</Text>
          <Text style={styles.subtitle}>
            What would you like to order today?
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryCard category={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <View key={product.id} style={styles.productItem}>
                <ProductCard product={product} />
              </View>
            ))}
          </View>
        </View>

        {/* Promotions Banner */}
        <View style={styles.promotionBanner}>
          <Text style={styles.promotionTitle}>🚚 Free Delivery</Text>
          <Text style={styles.promotionText}>On orders over $50</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function HomeScreen() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  categoriesList: {
    paddingHorizontal: 12,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  productItem: {
    width: '50%',
  },
  promotionBanner: {
    backgroundColor: '#10B981',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  promotionText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
});
