const videos = await loadVideosAsync().catch((videosError) => {
    // Handle videos error
});
const meta = await loadMetaAsync().catch((metaError) => {
    // Handle meta error
});
DoSomething(videos, meta);

function anAsyncCall() {
    return doSomethingAsync().then(() => {
        return somethingComplicated();
    });
}

db.getAllDocs().then((result) => {
    const removePromises = result.rows.map((row) => db.remove(row.doc));
    return Promise.all(removePromises);
}).then(function () {
    // All docs must be removed!
});

doAsync().then(() => {
    throw new Error('nope');
}).catch(error => console.log(error));