import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { User, MapPin, CreditCard, Bell, Heart, CircleHelp as HelpCircle, Settings, LogOut, ChevronRight } from 'lucide-react-native';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}

function MenuItem({ icon, title, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        {icon}
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <ChevronRight size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <User size={32} color="#FFFFFF" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>john.doe@example.com</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <MenuItem
            icon={<MapPin size={20} color="#6B7280" />}
            title="Delivery Addresses"
          />
          <MenuItem
            icon={<CreditCard size={20} color="#6B7280" />}
            title="Payment Methods"
          />
          <MenuItem
            icon={<Bell size={20} color="#6B7280" />}
            title="Notifications"
          />
          <MenuItem
            icon={<Heart size={20} color="#6B7280" />}
            title="Favorites"
          />
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon={<HelpCircle size={20} color="#6B7280" />}
            title="Help & Support"
          />
          <MenuItem
            icon={<Settings size={20} color="#6B7280" />}
            title="Settings"
          />
        </View>

        {/* Logout */}
        <View style={styles.menuSection}>
          <MenuItem
            icon={<LogOut size={20} color="#EF4444" />}
            title="Sign Out"
          />
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>FreshMart v1.0.0</Text>
          <Text style={styles.appDescription}>
            Your favorite grocery delivery app
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 16,
  },
  appInfo: {
    alignItems: 'center',
    padding: 40,
  },
  appVersion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
  appDescription: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});