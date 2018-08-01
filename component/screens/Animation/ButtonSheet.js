
// 
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";

// import RNBottomActionSheet from 'react-native-bottom-action-sheet'

import Icon from "react-native-vector-icons/FontAwesome";
// 
import x from '../../assets/x.jpeg'


const images = [
 x,
 x,
 x
]
export default class Buttonsheet extends Component {
//   static contextTypes = {
//     openDrawer: PropTypes.func,
//   };

//   state = {
//     hidden: false,
//     viewPagerSelected: 0,
//   };

//   handleOpenDrawer = () => {
//     Keyboard.dismiss()
//     this.context.openDrawer()
//   }

//   handleFabPress = () => {
//     ToastAndroid.show('Pressed', ToastAndroid.SHORT)
//   }

//   handleState = (state) => {
//     this.bottomSheet.setBottomSheetState(state)
//   }

//   handleHeaderPress = () => {
//     this.handleState(STATE_ANCHOR_POINT)
//   }

//   handleViewPager = (e) => {
//     this.setState({ viewPagerSelected: e.nativeEvent.position })
//   }

//   renderCard(source, title) {
//     return (
//       <View style={styles.card}>
//         <Image source={source} style={styles.cardImage} />
//         <View style={styles.cardContent}>
//           <Text style={styles.cardTitle}>{title}</Text>
//           <Text style={styles.cardDetail}>Beer</Text>
//           <View style={styles.cardStars}>
//             <Text style={{ fontSize: 10, color: STAR_COLOR }}>4.2</Text>
//             <Icon color={STAR_COLOR} name="md-star" size={10} />
//             <Icon color={STAR_COLOR} name="md-star" size={10} />
//             <Icon color={STAR_COLOR} name="md-star" size={10} />
//             <Icon color={STAR_COLOR} name="md-star" size={10} />
//             <Icon color={STAR_COLOR} name="md-star" size={10} />
//             <Text style={{fontSize: 10}}>(52)</Text>
//           </View>
//         </View>
//       </View>
//     )
//   }

//   renderComment(index) {
//     return (
//       <View style={styles.comment}>
//         <View style={{ alignItems: 'center' }}>
//           <Image source={x} style={styles.picture} />
//           <View style={styles.commentLine} />
//         </View>
//         <View style={styles.commentContent}>
//           <Text style={styles.commentName}>Lorem Ipsum</Text>
//           <Text style={styles.commentNumberReviews}>2 reviews</Text>
//           <View style={styles.commentStars}>
//             <Icon color={STAR_COLOR} name="md-star" size={14} />
//             <Icon color={STAR_COLOR} name="md-star" size={14} />
//             <Icon color={STAR_COLOR} name="md-star" size={14} />
//             <Icon color={STAR_COLOR} name="md-star" size={14} />
//             <Icon color={STAR_COLOR} name="md-star" size={14} />
//             <Text style={{fontSize: 12, marginLeft: 6}}>a month ago</Text>
//           </View>
//           <Text style={styles.commentDescription}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget blandit sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dui eros, gravida vitae mollis in, auctor eget sapien. In suscipit quam non tempus eleifend. Ut lacus massa, pellentesque vitae condimentum eu, dictum et metus
//           </Text>
//           <View style={styles.commentButtons}>
//             <View style={styles.commentButton}>
//               <Icon color='#ccc' name='md-thumbs-up' size={22} />
//               <Text style={styles.commentButtonLabel}>Helpful?</Text>
//             </View>
//             <View style={styles.commentButton}>
//               <Icon color='#ccc' name='md-share' size={22} />
//               <Text style={styles.commentButtonLabel}>Share</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     )
//   }

//   renderDetailItem(icon, text) {
//     return (
//       <TouchableNativeFeedback delayPressIn={0} delayPressOut={0} background={RippleColor('#d1d1d1')}>
//         <View>
//           <View pointerEvents="none" style={styles.detailItem}>
//             <Icon name={icon} size={22} color={PRIMARY_COLOR} />
//             <Text pointerEvents="none" style={styles.detailText}>{text}</Text>
//           </View>
//         </View>
//       </TouchableNativeFeedback>
//     )
//   }

//   renderBottomSheetContent() {
//     return (
//       <View style={styles.bottomSheetContent}>
//         <View style={styles.sectionIcons}>
//           <View style={styles.iconBox}>
//             <Icon name="md-call" size={22} color={PRIMARY_COLOR} />
//             <Text style={styles.iconLabel}>CALL</Text>
//           </View>
//           <View style={styles.iconBox}>
//             <Icon name="md-star" size={22} color={PRIMARY_COLOR} />
//             <Text style={styles.iconLabel}>SAVE</Text>
//           </View>
//           <View style={styles.iconBox}>
//             <Icon name="md-share" size={22} color={PRIMARY_COLOR} />
//             <Text style={styles.iconLabel}>Share</Text>
//           </View>
//           <View style={styles.iconBox}>
//             <Icon name="md-globe" size={22} color={PRIMARY_COLOR} />
//             <Text style={styles.iconLabel}>WEBSITE</Text>
//           </View>
//         </View>
//         <View style={styles.detailListSection}>
//           {this.renderDetailItem('md-map', 'Av. Lorem Ipsum dolor sit amet - consectetur adipising elit.')}
//           {this.renderDetailItem('md-timer', 'Open now: 06:22:00')}
//           {this.renderDetailItem('md-paper-plane', 'Place an order')}
//           {this.renderDetailItem('md-call', '(11) 9999-9999')}
//           {this.renderDetailItem('md-globe', 'https://github.com/cesardeazevedo/react-native-bottom-sheet-behavior')}
//           {this.renderDetailItem('md-create', 'Suggest an edit')}
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Review Summary</Text>
//           <View style={styles.reviewStats}>
//             <View style={styles.reviewStars}>
//               <Text style={styles.reviewStatsItem}>5 <Icon name="md-star" size={16} color='#ccc' /></Text>
//               <Text style={styles.reviewStatsItem}>4 <Icon name="md-star" size={16} color='#ccc' /></Text>
//               <Text style={styles.reviewStatsItem}>3 <Icon name="md-star" size={16} color='#ccc' /></Text>
//               <Text style={styles.reviewStatsItem}>2 <Icon name="md-star" size={16} color='#ccc' /></Text>
//               <Text style={styles.reviewStatsItem}>1 <Icon name="md-star" size={16} color='#ccc' /></Text>
//             </View>
//             <View style={styles.reviewBars}>
//               <View style={[styles.reviewStatsItem, styles.reviewBar, {width: 200}]}></View>
//               <View style={[styles.reviewStatsItem, styles.reviewBar, {width: 100}]}></View>
//               <View style={[styles.reviewStatsItem, styles.reviewBar, {width: 60}]}></View>
//               <View style={[styles.reviewStatsItem, styles.reviewBar, {width: 10}]}></View>
//               <View style={[styles.reviewStatsItem, styles.reviewBar, {width: 30}]}></View>
//             </View>
//             <View style={styles.reviewAverage}>
//               <Text style={styles.reviewAverageText}>4.8</Text>
//               <View style={styles.reviewAverageStars}>
//                 <Icon name="md-star" size={16} color={STAR_COLOR} />
//                 <Icon name="md-star" size={16} color={STAR_COLOR} />
//                 <Icon name="md-star" size={16} color={STAR_COLOR} />
//                 <Icon name="md-star" size={16} color={STAR_COLOR} />
//                 <Icon name="md-star" size={16} color={'#ccc'} />
//               </View>
//               <Text>57 reviews</Text>
//             </View>
//           </View>
//         </View>
//         <View style={[styles.section, styles.rateSection]}>
//           <Image source={x} style={styles.picture} />
//           <Text style={styles.rateTitle}>Rate and review</Text>
//           <Text>Tell everyone about your experience</Text>
//           <View style={styles.rateStars}>
//             <Icon style={styles.rateStar} name="md-star-outline" size={40} />
//             <Icon style={styles.rateStar} name="md-star-outline" size={40} />
//             <Icon style={styles.rateStar} name="md-star-outline" size={40} />
//             <Icon style={styles.rateStar} name="md-star-outline" size={40} />
//             <Icon style={styles.rateStar} name="md-star-outline" size={40} />
//           </View>
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>All reviews</Text>
//           {this.renderComment()}
//           <Text style={styles.moreReviews}>MORE REVIEWS</Text>
//         </View>
//         <View style={[styles.section, styles.takeoutSection]}>
//           <Text style={[styles.sectionTitle, {marginLeft: 20}]}>Takeout</Text>
//           <View style={styles.cards}>
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               style={{flex: 1}}>
//               {this.renderCard(images[0], 'Lorem Ipsum')}
//               {this.renderCard(images[1], 'Praesent tristique')}
//               {this.renderCard(images[2], 'Donec ultrices')}
//               {this.renderCard(images[0], 'Cras tincidunt')}
//               {this.renderCard(images[1], 'Proin eu feugiat')}
//             </ScrollView>
//           </View>
//         </View>
//       </View>
//     )
//   }

//   renderFloatingActionButton() {
//     return (
//       <FloatingActionButton
//         autoAnchor
//         elevation={18}
//         rippleEffect={true}
//         rippleColor="#55ffffff"
//         icon="directions"
//         iconProvider={IconMDI}
//         iconColor={WHITE}
//         iconColorExpanded={PRIMARY_COLOR}
//         onPress={this.handleFabPress}
//         backgroundColor={PRIMARY_COLOR}
//         backgroundColorExpanded={WHITE}
//       />
//     )
//   }

//   renderBackdropPager(source) {
//     return (
//       <View>
//         <Image resizeMode="cover" style={{width, height: anchorPoint}} source={source} />
//       </View>
//     )
//   }

//   renderBackdrop() {
//     const { viewPagerSelected } = this.state
//     return (
//       <BackdropBottomSheet height={anchorPoint}>
//         <View style={{flex: 1, backgroundColor: 'white'}}>
//           <ViewPagerAndroid onPageSelected={this.handleViewPager} style={{flex: 1}}>
//             {this.renderBackdropPager(images[0])}
//             {this.renderBackdropPager(images[1])}
//             {this.renderBackdropPager(images[2])}
//           </ViewPagerAndroid>
//           <View style={styles.dots}>
//             <View style={[styles.dot, viewPagerSelected === 0 && styles.dotActive]} />
//             <View style={[styles.dot, viewPagerSelected === 1 && styles.dotActive]} />
//             <View style={[styles.dot, viewPagerSelected === 2 && styles.dotActive]} />
//           </View>
//         </View>
//       </BackdropBottomSheet>
//     )
//   }

//   renderMergedAppBarLayout() {
//     return (
//       <MergedAppBarLayout
//         translucent
//         mergedColor={PRIMARY_COLOR}
//         toolbarColor={PRIMARY_COLOR}
//         statusBarColor={STATUS_BAR_COLOR}
//         style={styles.appBarMerged}>
//         <Icon.ToolbarAndroid
//           navIconName="md-arrow-back"
//           overflowIconName='md-more'
//           title='React Native Bar!'
//           titleColor={WHITE}
//           style={{elevation: 6}}
//           onIconClicked={() => this.handleState(STATE_COLLAPSED)}
//           actions={[
//             {title: 'Search', show: 'always', iconName: 'md-search' },
//             {title: 'More'}
//           ]}
//         />
//       </MergedAppBarLayout>
//     )
//   }

//   renderBottomSheet() {
//     return (
//       <BottomSheetBehavior
//         anchorEnabled
//         anchorPoint={anchorPoint}
//         peekHeight={80}
//         elevation={8}
//         ref={(bottomSheet) => { this.bottomSheet = bottomSheet }}
//         onSlide={this.handleSlide}
//         onStateChange={this.handleBottomSheetChange}>
//         <View style={styles.bottomSheet}>
//           <BottomSheetHeader
//             onPress={this.handleHeaderPress}
//             textColorExpanded={WHITE}
//             backgroundColor={WHITE}
//             backgroundColorExpanded={PRIMARY_COLOR}>
//             <View pointerEvents='none' style={styles.bottomSheetHeader}>
//               <View style={styles.bottomSheetLeft}>
//                 <Text selectionColor={'#000'} style={styles.bottomSheetTitle}>
//                   React Native Bar!
//                 </Text>
//                 <View style={styles.starsContainer}>
//                   <Text style={{marginRight: 8}} selectionColor={STAR_COLOR}>5.0</Text>
//                   <Icon name="md-star" size={16} selectionColor={STAR_COLOR} style={styles.star} />
//                   <Icon name="md-star" size={16} selectionColor={STAR_COLOR} style={styles.star} />
//                   <Icon name="md-star" size={16} selectionColor={STAR_COLOR} style={styles.star} />
//                   <Icon name="md-star" size={16} selectionColor={STAR_COLOR} style={styles.star} />
//                   <Icon name="md-star" size={16} selectionColor={STAR_COLOR} style={styles.star} />
//                 </View>
//               </View>
//               <View style={styles.bottomSheetRight}>
//                 <Text style={styles.routeLabel} selectionColor={PRIMARY_COLOR}>4 min</Text>
//               </View>
//             </View>
//           </BottomSheetHeader>
//           {this.renderBottomSheetContent()}
//         </View>
//       </BottomSheetBehavior>
//     )
//   }

//   renderMaps() {
//     return (
//       <View style={styles.containerMap}>
//       </View>
//     )
//   }

//   renderToolbar() {
//     return (
//       <ScrollingAppBarLayout
//         translucent
//         style={styles.scrollAppBar}
//         statusBarColor={STATUS_BAR_COLOR}>
//         <Icon.ToolbarAndroid
//           titleColor={WHITE}
//           title="Google Maps"
//           navIconName={'md-menu'}
//           style={styles.toolbar}
//           onIconClicked={() => this.context.openDrawer()} />
//       </ScrollingAppBarLayout>
//     )
//   }

//   render() {
//     return (
//       <CoordinatorLayout style={styles.container}>
//         <StatusBar translucent barStyle='dark-content' backgroundColor={STATUS_BAR_COLOR} />
//         {this.renderToolbar()}
//         <View style={styles.content}>
//           {this.renderMaps()}
//         </View>
//         {this.renderBackdrop()}
//         {this.renderBottomSheet()}
//         {this.renderMergedAppBarLayout()}
//         {this.renderFloatingActionButton()}
//       </CoordinatorLayout>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: WHITE,
//   },
//   content: {
//     backgroundColor: 'transparent',
//   },
//   scrollAppBar: {
//     zIndex: 1,
//   },
//   toolbar: {
//     backgroundColor: PRIMARY_COLOR,
//   },
//   appBarMerged: {
//     backgroundColor: 'transparent',
//   },
//   containerMap: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height,
//     width,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   buttonIcon: {
//     padding: 16,
//     borderRadius: 50,
//   },
//   toolbarInput: {
//     flex: 1,
//   },
//   textInput: {
//     flex: 1,
//     fontSize: 18,
//     marginHorizontal: 8,
//   },
//   bottomSheet: {
//     // height,
//     zIndex: 5,
//     backgroundColor: 'white'
//   },
//   bottomSheetHeader: {
//     padding: 16,
//     paddingLeft: 28,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // Don't forget this if you are using BottomSheetHeader
//     backgroundColor: 'transparent'
//   },
//   bottomSheetLeft: {
//     flexDirection: 'column'
//   },
//   bottomSheetRight: {
//     flexDirection: 'column'
//   },
//   bottomSheetTitle: {
//     fontFamily: 'sans-serif-medium',
//     fontSize: 18,
//   },
//   dots: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     marginHorizontal: 4,
//     opacity: 0.8,
//     backgroundColor: WHITE,
//     borderRadius: 50,
//   },
//   dotActive: {
//     width: 10,
//     height: 10,
//     opacity: 1,
//   },
//   bottomSheetContent: {
//     // flex: 1,
//     backgroundColor: WHITE,
//   },
//   starsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   star: {
//     marginHorizontal: 2,
//   },
//   routeLabel: {
//     marginTop: 32,
//     marginRight: 12,
//     fontSize: 12,
//     fontFamily: 'sans-serif-medium',
//   },
//   sectionIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 18,
//     borderBottomWidth: 1,
//     borderColor: '#eee'
//   },
//   iconBox: {
//     flex: 1,
//     borderRadius: 50,
//     alignItems: 'center',
//     flexDirection: 'column'
//   },
//   iconLabel: {
//     fontSize: 14,
//     marginTop: 4,
//     color: PRIMARY_COLOR
//   },
//   detailListSection: {
//     paddingVertical: 8,
//   },
//   detailItem: {
//     height: 42,
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingHorizontal: 26,
//   },
//   detailText: {
//     color: '#333',
//     fontSize: 14,
//     marginLeft: 24,
//     lineHeight: 22,
//   },
//   section: {
//     padding: 22,
//     borderColor: '#eee',
//     borderTopWidth: 1,
//   },
//   sectionTitle: {
//     color: '#333',
//     fontSize: 16,
//     fontFamily: 'sans-serif-medium',
//   },
//   reviewStats: {
//     marginTop: 20,
//     flexDirection: 'row',
//   },
//   reviewStars: {
//     flexDirection: 'column',
//     paddingRight: 8,
//   },
//   reviewStatsItem: {
//     marginTop: 4,
//     height: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   reviewBar: {
//     paddingHorizontal: 8,
//     borderBottomRightRadius: 2,
//     borderTopRightRadius: 2,
//     backgroundColor: STAR_COLOR
//   },
//   reviewAverage: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   reviewAverageText: {
//     fontSize: 42,
//     textAlign: 'center',
//     color: STAR_COLOR,
//     fontWeight: '200',
//   },
//   reviewAverageStars: {
//     marginVertical: 4,
//     flexDirection: 'row',
//   },
//   rateSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 24,
//   },
//   picture: {
//     width: 38,
//     height: 38,
//     borderRadius: 50,
//     zIndex: 2,
//   },
//   rateTitle: {
//     color: '#333',
//     marginTop: 10,
//   },
//   rateStars: {
//     marginTop: 12,
//     flexDirection: 'row',
//   },
//   rateStar: {
//     color: 'grey',
//     marginHorizontal: 12,
//   },
//   comment: {
//     paddingTop: 24,
//     flexDirection: 'row',
//   },
//   commentLine: {
//     position: 'absolute',
//     width: 3,
//     height: 240,
//     zIndex: 1,
//     backgroundColor: '#eee',
//   },
//   commentContent: {
//     flexDirection: 'column',
//     marginLeft: 16,
//     paddingBottom: 10,
//     borderBottomWidth: 1,
//     borderColor: '#eee'
//   },
//   commentName: {
//     color: '#333',
//     fontFamily: 'sans-serif-medium',
//   },
//   commentNumberReviews: {
//     fontSize: 10,
//   },
//   commentStars: {
//     marginTop: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   commentDescription: {
//     width: width - 100
//   },
//   commentButtons: {
//     flexDirection: 'row',
//     marginTop: 12,
//   },
//   commentButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 22,
//   },
//   commentButtonLabel: {
//     fontSize: 12,
//     marginLeft: 10,
//   },
//   moreReviews: {
//     color: PRIMARY_COLOR,
//     marginTop: 20,
//     marginLeft: 52,
//     fontFamily: 'sans-serif-medium',
//   },
//   takeoutSection: {
//     borderTopWidth: 1,
//     paddingHorizontal: 0,
//     borderColor: '#ccc',
//     backgroundColor: '#eee',
//   },
//   cards: {
//     height: 200,
//     marginTop: 20,
//   },
//   card: {
//     width: 130,
//     height: 170,
//     marginHorizontal: 5,
//     elevation: 2,
//     borderRadius: 4,
//     overflow: 'hidden',
//     backgroundColor: WHITE,
//   },
//   cardImage: {
//     width: 130,
//     height: 100,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//   },
//   cardContent: {
//     flexDirection: 'column',
//     paddingTop: 4,
//     paddingHorizontal: 8,
//   },
//   cardTitle: {
//     color: '#333',
//     fontFamily: 'sans-serif-medium',
//   },
//   cardDetail: {
//     fontSize: 10,
//   },
//   cardStars: {
//     marginTop: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// })
//   static contextTypes = {
//     openDrawer: PropTypes.func,
//   };

//   state = {
//     color: 'red'
//   };

//   handleState = (state) => {
//     this.bottomSheet.setBottomSheetState(state)
//   }

//   handleColor = () => {
//     this.setState({
//       color: this.state.color === 'red' ? 'blue' : 'red'
//     })
//   }

//   handleSlide(e) {
//     this.offset = e.nativeEvent.offset
//   }

//   handleBottomSheetChange(e) {
//     this.lastState = e.nativeEvent.state
//   }

//   renderImage(source) {
//     return (
//       <View>
//         <Image
//           resizeMode="cover"
//           style={{width, height: 300}}
//           source={source}
//         />
//       </View>
//     )
//   }

//   render() {
//     return (
//       <CoordinatorLayout style={styles.container}>
//         <StatusBar translucent backgroundColor='#205cb2' />
//         <ScrollingAppBarLayout
//           translucent
//           style={styles.scrollAppBar}
//           statusBarColor='#205cb2'>
//           <Icon.ToolbarAndroid
//             navIconName={'md-menu'}
//             style={styles.toolbar}
//             titleColor="#fff"
//             title="AnchorSheet"
//             onIconClicked={() => this.context.openDrawer()}
//         />
//         </ScrollingAppBarLayout>
//         <View style={styles.content} />
//         <BackdropBottomSheet height={300}>
//           <View style={{flex: 1, backgroundColor: 'white'}}>
//             <ViewPagerAndroid style={{flex: 1}}>
//               {this.renderImage(images[0])}
//               {this.renderImage(images[1])}
//               {this.renderImage(images[2])}
//             </ViewPagerAndroid>
//           </View>
//         </BackdropBottomSheet>
//         <BottomSheetBehavior
//           anchorEnabled
//           peekHeight={80}
//           hideable={false}
//           ref={ref => {this.bottomSheet = ref}}
//           onSlide={this.handleSlide}
//           onStateChange={this.handleBottomSheetChange}>
//           <View style={styles.bottomSheet}>
//             <View style={styles.bottomSheetHeader}>
//               <Text style={styles.label}>AnchorSheetBehavior !</Text>
//             </View>
//             <View style={styles.bottomSheetContent}>
//               <Button title='Change Color' onPress={this.handleColor} />
//             </View>
//           </View>
//         </BottomSheetBehavior>
//         <MergedAppBarLayout
//           translucent
//           mergedColor={this.state.color}
//           toolbarColor={this.state.color}
//           statusBarColor={this.state.color}
//           style={styles.appBarMerged}>
//           <Icon.ToolbarAndroid
//             navIconName='md-arrow-back'
//             overflowIconName='md-more'
//             title='AnchorSheet'
//             titleColor="#fff"
//             style={{elevation: 6}}
//             actions={[
//               {title: 'Search', show: 'always', iconName: 'md-search' },
//               {title: 'More'}
//             ]}
//             onIconClicked={() => this.handleState(BottomSheetBehavior.STATE_COLLAPSED)}>
//           </Icon.ToolbarAndroid>
//         </MergedAppBarLayout>
//         <FloatingActionButton
//           autoAnchor
//           elevation={18}
//           backgroundColor={'#ffffff'}
//           rippleColor={'#55ffffff'}
//           onIconClicked={() => this.handleState(alert("ds"))}
//         />
//       </CoordinatorLayout>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   scrollAppBar: {
//     zIndex: 1,
//   },
//   toolbar: {
//     backgroundColor: '#4389f2',
//   },
//   appBarMerged: {
//     backgroundColor: 'transparent',
//   },
//   bottomSheet: {
//     height,
//     backgroundColor: '#4389f2',
//   },
//   bottomSheetHeader: {
//     padding: 28,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   bottomSheetContent: {
//     flex: 1,
//     padding: 12,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// })
//   static contextTypes = {
//     openDrawer: PropTypes.func,
//   };

//   handleSlide(e) {
//     this.offset = e.nativeEvent.offset
//   }

//   handleBottomSheetChange(e) {
//     this.lastState = e.nativeEvent.state
//   }

//   render() {
//     return (
//       <CoordinatorLayout style={styles.container}>
//         <StatusBar translucent backgroundColor='#205cb2' />
//         <View style={styles.content}>
//           <View style={styles.toolbarWrapper}>
//             <Icon.ToolbarAndroid
//               navIconName={'md-menu'}
//               style={styles.toolbar}
//               titleColor="white"
//               title="Simple Bottom Sheet"
//               onIconClicked={() => this.context.openDrawer()}
//             />
//           </View>
//         </View>
//         <BottomSheetBehavior
//           peekHeight={80}
//           hideable={false}
//           onSlide={this.handleSlide}
//           onStateChange={this.handleBottomSheetChange}>
//           <View style={styles.bottomSheet}>
//             <View style={styles.bottomSheetHeader}>
//               <Text style={styles.label}>BottomSheetBehavior !</Text>
//             </View>
//             <View style={styles.bottomSheetContent}>
//             </View>
//           </View>
//         </BottomSheetBehavior>
//         <FloatingActionButton
//           autoAnchor
//           elevation={18}
//           icon='md-navigate'
//           iconColor='#4589f2'
//           iconProvider={Icon}
//           backgroundColor={'red'}
//           rippleColor={'#55ffffff'}
//           onIconClicked={() => console.log('gj')}
//         />
//       </CoordinatorLayout>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   toolbarWrapper: {
//     paddingTop: 24,
//     marginBottom: 24,
//     backgroundColor: '#4389f2',
//   },
//   toolbar: {
//     width,
//     height: 56,
//   },
//   bottomSheet: {
//     backgroundColor: '#4389f2',
//   },
//   bottomSheetHeader: {
//     padding: 28,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   bottomSheetContent: {
//     height: 200,
//     padding: 2,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// })
  constructor (props) {
    super(props)

    this.state = {
      alterView: false,
      sheetView: false,
      gridView: false
    }
  }



  _showSheetView = () => {
    let facebook = <Icon name={"facebook"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let instagram = <Icon name={"instagram"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let skype = <Icon name={"skype"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let twitter = <Icon name={"twitter"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let whatsapp = <Icon name={"whatsapp"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let youtube = <Icon name={"youtube"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let google = <Icon name={"google"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let linkedin = <Icon name={"linkedin"} color={"#000000"} size={40} family={"FontAwesome"} />;


    RNBottomActionSheet.SheetView.Show({
      title: "Awesome!",
      items: [
        { title: "Facebook", subTitle: "Facebook Description", icon: 'facebook.png' },
        { title: "Instagram", subTitle: "Instagram Description" },
        { title: "Skype", subTitle: "Skype Description", icon: skype },
        { title: "Twitter", subTitle: "Twitter Description", icon: twitter, divider: true },
        { title: "WhatsApp", subTitle: "WhatsApp Description", icon: whatsapp },
        { title: "YouTube", subTitle: "YouTube Description", icon: youtube },
        { title: "Google", subTitle: "Google Description", icon: google },
        { title: "LinkedIn", subTitle: "LinkedIn Description", icon: linkedin }
      ],
      theme: "light",
      selection: 3,
      onSelection: selection => {
        console.log("selection: " + selection);
      }
    });
  }


  render() {
    let facebook = <Icon name={"facebook"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let instagram = <Icon name={"instagram"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let skype = <Icon name={"skype"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let twitter = <Icon name={"twitter"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let whatsapp = <Icon name={"whatsapp"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let youtube = <Icon name={"youtube"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let google = <Icon name={"google"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let linkedin = <Icon name={"linkedin"} color={"#000000"} size={40} family={"FontAwesome"} />;



    return <View style={styles.container}>
        <TouchableHighlight onPress={() => {
            this._showSheetView();
            this.setState({
              alterView: false,
              sheetView: true,
              gridView: false
            });
          }}>
          <Text>{"Sheet View"}</Text>
        </TouchableHighlight>
        <RNBottomActionSheet.SheetView visible={this.state.sheetView} title={"Awesome!"} theme={"light"} onSelection={selection => {
            console.log("selection: " + selection);
          }}>
          <RNBottomActionSheet.SheetView.Item title={"Facebook"} subTitle={"Facebook Description"} icon={facebook} />
          <RNBottomActionSheet.SheetView.Item title={"Instagram"} subTitle={"Instagram Description"} icon={instagram} />
          <RNBottomActionSheet.SheetView.Item title={"Skype"} subTitle={"Skype Description"} icon={skype} />
          <RNBottomActionSheet.SheetView.Item title={"Twitter"} subTitle={"Twitter Description"} icon={twitter} divider={true} />
          <RNBottomActionSheet.SheetView.Item title={"WhatsApp"} subTitle={"WhatsApp Description"} icon={whatsapp} />
          <RNBottomActionSheet.SheetView.Item title={"YouTube"} subTitle={"YouTube Description"} icon={youtube} />
          <RNBottomActionSheet.SheetView.Item title={"Google"} subTitle={"Google Description"} icon={google} />
          <RNBottomActionSheet.SheetView.Item title={"LinkedIn"} subTitle={"LinkedIn Description"} icon={linkedin} />
        </RNBottomActionSheet.SheetView>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});