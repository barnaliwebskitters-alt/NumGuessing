import { StyleSheet } from "react-native";
import normalize from "../utils/normalize";


const css = StyleSheet.create({
    Container: {
        flex: 1,
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    tac: {
        textAlign: 'center',
    },
    jcse: {
        justifyContent: 'space-evenly',
    },
    jcsa: {
        justifyContent: 'space-around',
    },
    jcc: {
        justifyContent: 'center',
    },
    jcfe: {
        justifyContent: 'flex-end',
    },
    jcsb: {
        justifyContent: 'space-between',
    },
    jcfs: {
        justifyContent: 'flex-start',
    },
    aife: {
        alignItems: 'flex-end',
    },
    aifs: {
        alignItems: 'flex-start',
    },
    aic: {
        alignItems: 'center',
    },
    ass: {
        alignSelf: 'flex-start',
    },
    ase: {
        alignSelf: 'flex-end',
    },
    asc: {
        alignSelf: 'center',
    },
    m0: {
        margin: 0,
    },
    m1: {
        margin: normalize(4),
    },
    m2: {
        margin: normalize(8),
    },
    m3: {
        margin: normalize(12),
    },

    mx0: {
        marginHorizontal: 0,
    },

    mt1: {
        marginTop: normalize(4),
    },
    mt6px: {
        marginTop: normalize(6),
    },
    mt2: {
        marginTop: normalize(8),
    },
    mt3: {
        marginTop: normalize(12),
    },
    mt4: {
        marginTop: normalize(16),
    },
    mt5: {
        marginTop: normalize(20),
    },
    mt6: {
        marginTop: normalize(30),
    },
    mt7: {
        marginTop: normalize(50),
    },
    mx1: {
        marginHorizontal: normalize(4),
    },
    mx2: {
        marginHorizontal: normalize(8),
    },
    mx3: {
        marginHorizontal: normalize(12),
    },
    mx4: {
        marginHorizontal: normalize(16),
    },
    mx5: {
        marginHorizontal: normalize(20),
    },
    mx6: {
        marginHorizontal: normalize(24),
    },
    mx7: {
        marginHorizontal: normalize(28),
    },
    mx8: {
        marginHorizontal: normalize(32),
    },
    mx9: {
        marginHorizontal: normalize(36),
    },
    mx10: {
        marginHorizontal: normalize(40),
    },

    mt0: {
        marginTop: 0,
    },
    mt1: {
        marginTop: normalize(4),
    },
    mt2: {
        marginTop: normalize(8),
    },
    mt3: {
        marginTop: normalize(16),
    },
    mt4: {
        marginTop: normalize(20),
    },
    mt5: {
        marginTop: normalize(25),
    },
    mb0: {
        marginBottom: normalize(0),
    },
    mb1: {
        marginBottom: normalize(4),
    },
    mb2: {
        marginBottom: normalize(8),
    },
    mb3: {
        marginBottom: normalize(16),
    },
    mb4: {
        marginBottom: normalize(20),
    },
    mb5: {
        marginBottom: normalize(25),
    },
    ml1: {
        marginLeft: normalize(4),
    },
    ml2: {
        marginLeft: normalize(8),
    },
    ml3: {
        marginLeft: normalize(16),
    },
    ml4: {
        marginLeft: normalize(20),
    },
    ml5: {
        marginLeft: normalize(25),
    },
    mr1: {
        marginRight: normalize(4),
    },
    mr2: {
        marginRight: normalize(8),
    },
    mr3: {
        marginRight: normalize(16),
    },
    mr4: {
        marginRight: normalize(20),
    },
    mr5: {
        marginRight: normalize(35),
    },
    mr6: {
        marginRight: normalize(48),
    },
    my0: {
        marginVertical: 0,
    },
    my1: {
        marginVertical: normalize(3),
    },
    my2: {
        marginVertical: normalize(8),
    },
    my3: {
        marginVertical: normalize(16),
    },
    my4: {
        marginVertical: normalize(20),
    },
    my5: {
        marginVertical: normalize(25),
    },
    p0: {
        padding: 0,
    },
    px0: {
        paddingHorizontal: 0,
    },
    py0: {
        paddingVertical: 0,
    },
    p1: {
        padding: normalize(2),
    },
    p2: {
        padding: normalize(4),
    },
    p3: {
        padding: normalize(8),
    },
    p4: {
        padding: normalize(16),
    },
    p5: {
        padding: normalize(24),
    },
    px1: {
        paddingHorizontal: normalize(4),
    },
    px2: {
        paddingHorizontal: normalize(8),
    },
    px3: {
        paddingHorizontal: normalize(16),
    },
    px4: {
        paddingHorizontal: normalize(24),
    },
    px5: {
        paddingHorizontal: normalize(32),
    },
    py1: {
        paddingVertical: normalize(4),
    },
    py2: {
        paddingVertical: normalize(8),
    },
    py3: {
        paddingVertical: normalize(16),
    },
    py4: {
        paddingVertical: normalize(24),
    },
    py5: {
        paddingVertical: normalize(32),
    },
    pl1: {
        paddingLeft: normalize(4),
    },
    pl2: {
        paddingLeft: normalize(8),
    },
    pl3: {
        paddingLeft: normalize(16),
    },
    pl4: {
        paddingLeft: normalize(20),
    },
    pl5: {
        paddingLeft: normalize(25),
    },
    pr1: {
        paddingRight: normalize(4),
    },
    pr2: {
        paddingRight: normalize(8),
    },
    pr3: {
        paddingRight: normalize(16),
    },
    pr4: {
        paddingRight: normalize(20),
    },
    pr5: {
        paddingRight: normalize(25),
    },
    pt1: {
        paddingTop: normalize(4),
    },
    pt2: {
        paddingTop: normalize(8),
    },
    pt3: {
        paddingTop: normalize(16),
    },
    pt4: {
        paddingTop: normalize(20),
    },
    pt5: {
        paddingTop: normalize(25),
    },
    pb1: {
        paddingBottom: normalize(4),
    },
    pb2: {
        paddingBottom: normalize(8),
    },
    pb3: {
        paddingBottom: normalize(16),
    },
    pb4: {
        paddingBottom: normalize(20),
    },
    pb5: {
        paddingBottom: normalize(25),
    },


});


export default css;