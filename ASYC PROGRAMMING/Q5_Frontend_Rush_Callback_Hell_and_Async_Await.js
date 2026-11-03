// Q5 – Frontend Rush: Avoiding Callback Hell

// Version 1: Nested callbacks (callback hell).
function designCallback(next) {
    setTimeout(() => {
        console.log("Design completed.");
        next();
    }, 1000);
}

function buildCallback(next) {
    setTimeout(() => {
        console.log("Build completed.");
        next();
    }, 1000);
}

function testCallback(next) {
    setTimeout(() => {
        console.log("Tests passed.");
        next();
    }, 1000);
}

function deployCallback(next) {
    setTimeout(() => {
        console.log("Deployment completed.");
        next();
    }, 1000);
}

function celebrateCallback() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback version started.");
designCallback(() => {
    buildCallback(() => {
        testCallback(() => {
            deployCallback(() => {
                celebrateCallback();
            });
        });
    });
});

// Version 2: Promise-based stages + async/await.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${stageName} completed.`);
            resolve();
        }, 1000);
    });
}

async function runPipelineWithAsyncAwait() {
    console.log("\\nAsync/await version started.");
    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");
    console.log("Pipeline finished!");
}

// The callback version nests functions inside one another, making the flow
// harder to read. async/await lets asynchronous steps look like normal,
// top-to-bottom code. Each await pauses this async function until that
// Promise settles, without blocking the JavaScript thread.
//
// Run the async version after the callback demo has finished.
setTimeout(runPipelineWithAsyncAwait, 5500);
