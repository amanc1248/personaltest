const hi = {
    _id: {
        $in: [
            ObjectId("66bcf536b84d9ee31bb4e8ac"),
            ObjectId("66bcf536b99de0293d5b34e8"),
            ObjectId("66bcf536d517531e9e6b28a4"),
            ObjectId("66bcf5364a122436f09111c5"),
            ObjectId("66bcf536a8db6610a33e1d1a"),
            ObjectId("66bcf536e421a1b024bff3d6"),
            ObjectId("66bcf5368d7264a9ab9f0007"),
            ObjectId("66bcf536bfa47d2fd4dd17a6"),
            ObjectId("66bcf53675a26f919711420b"),
            ObjectId("66bcf5369e6c252e3ede82ba"),
            ObjectId("66bcf536261696e60af04e50"),
            ObjectId("66bcf5362ef91f93ab441fd5"),
            ObjectId("66bcf5367e2629dd827efeac"),
            ObjectId("66bd08f4fd1f1af2f5ca6994")
        ]
    },
    settlementNumber: {
        $in: [
            "428",
            "429",
            "430",
            "431",
            "432",
            "433",
            "434",
            "435",
            "436",
            "437",
            "438",
            "439",
            "440",
            "472"
        ]
    },
    carrier: ObjectId("654a747974b973153ca273e0"),
    status: "FINALIZED",
};
// {
//     $set: {
//         status: "REVIEWED"
//     }
// }

const a = db.settlements.updateMany({
    _id: {
        $in: [
            ObjectId("66bcf536b84d9ee31bb4e8ac"),
            ObjectId("66bcf536b99de0293d5b34e8"),
            ObjectId("66bcf536d517531e9e6b28a4"),
            ObjectId("66bcf5364a122436f09111c5"),
            ObjectId("66bcf536a8db6610a33e1d1a"),
            ObjectId("66bcf536e421a1b024bff3d6"),
            ObjectId("66bcf5368d7264a9ab9f0007"),
            ObjectId("66bcf536bfa47d2fd4dd17a6"),
            ObjectId("66bcf53675a26f919711420b"),
            ObjectId("66bcf5369e6c252e3ede82ba"),
            ObjectId("66bcf536261696e60af04e50"),
            ObjectId("66bcf5362ef91f93ab441fd5"),
            ObjectId("66bcf5367e2629dd827efeac"),
            ObjectId("66bd08f4fd1f1af2f5ca6994")
        ]
    },
    settlementNumber: {
        $in: [
            "428",
            "429",
            "430",
            "431",
            "432",
            "433",
            "434",
            "435",
            "436",
            "437",
            "438",
            "439",
            "440",
            "472"
        ]
    },
    carrier: ObjectId("654a747974b973153ca273e0"),
    status: "FINALIZED",
}, {
    $set: {
        status: "REVIEWED"
    }
})