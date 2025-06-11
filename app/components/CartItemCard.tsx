import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { CartItem, useCart } from '@/contexts/CartContext';

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { dispatch } = useCart();

  const handleIncrement = () => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: item.id, quantity: item.quantity + 1 },
    });
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: item.id, quantity: item.quantity - 1 },
      });
    }
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Trash2 size={16} color="#EF4444" />
        </TouchableOpacity>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrement}
          >
            <Minus size={16} color="#6B7280" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrement}
          >
            <Plus size={16} color="#10B981" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  unit: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#10B981',
  },
  controls: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  removeButton: {
    padding: 4,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
  },
  quantityButton: {
    padding: 4,
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },
});
