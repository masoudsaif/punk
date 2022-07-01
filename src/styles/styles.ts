import { StyleSheet } from 'react-native';
import { palette } from './palette';
import { sizes } from './sizes';

const styles = StyleSheet.create({
  screenPadding: {
    paddingVertical: sizes['7xl'],
    paddingHorizontal: sizes['5xl'],
  },
  screenHorizontalPadding: {
    paddingHorizontal: sizes['5xl'],
  },
  screen: {
    paddingVertical: sizes['7xl'],
    paddingHorizontal: sizes['5xl'],
    height: '100%',
    backgroundColor: palette.background,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingVertical: sizes['7xl'],
    paddingHorizontal: sizes['5xl'],
    width: '100%',
    zIndex: 2,
  },
  notificationsContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  separator: {
    marginVertical: sizes['7xl'],
  },
  miniSeparator: {
    marginVertical: sizes.lg,
  },
  hugeVerticalPadding: {
    paddingVertical: sizes['11xl'],
  },
  divider: {
    width: sizes['5xl'],
    height: sizes['5xl'],
  },
  flex: {
    flex: 1,
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  categoryTypography: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: palette.white,
    paddingVertical: sizes['5xl'],
  },
  iconButton: {
    justifyContent: 'center',
    borderRadius: 500,
    padding: sizes.lg,
  },
  smIconButton: {
    width: 35,
    height: 35,
    padding: 0,
    borderRadius: 50,
    alignItems: 'center',
  },
  gradientIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 500,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: sizes.lg,
  },
  productCardImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  productCard: {
    padding: sizes.xxl,
    width: 200,
    borderRadius: sizes['7xl'],
    alignSelf: 'flex-start',
    backgroundColor: palette.white,
  },
  productButton: {
    position: 'absolute',
    marginRight: -sizes.xxl,
    right: 0,
    bottom: 7,
    borderRadius: 0,
    backgroundColor: palette.primary,
    borderTopLeftRadius: sizes['3xl'],
    borderBottomLeftRadius: sizes['3xl'],
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes['3xl'],
  },
  productImage: {
    width: '100%',
    height: '80%',
    marginBottom: -sizes.lg,
  },
});

export default styles;
