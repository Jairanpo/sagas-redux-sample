const queryImages = async (_, args) => {
    return {
        status: 'success',
        message: 'Image loaded from placekeanu.com',
        data: {
            width: 0,
            height: 0,
            type: "young",
            src: "http://someimage.com"
        }
    };
};
export default {
    Query: {
        queryImages: queryImages
    }
};
//# sourceMappingURL=images-resolver.js.map