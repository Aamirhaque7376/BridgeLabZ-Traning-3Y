// Q10 – The Final Delivery: Async Pipeline Debugger

// Create a Promise for one delivery step. Each step waits 1–2 seconds.
// A step has a 15% chance of failure.
function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1001);

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

function takeOrder() {
    return runDeliveryStep("takeOrder", "Step 1: Order taken");
}

function prepare() {
    return runDeliveryStep("prepare", "Step 2: Food prepared");
}

function pack() {
    return runDeliveryStep("pack", "Step 3: Package ready");
}

function dispatch() {
    return runDeliveryStep("dispatch", "Step 4: Out for delivery");
}

function deliver() {
    return runDeliveryStep("deliver", "Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Each await pauses this async function until the current Promise
        // resolves. The next step starts only after the previous step succeeds.
        // The wait does not block the JavaScript event loop or other work.
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        // If any step rejects, control jumps directly to this catch block.
        console.error("Pipeline failed!", error.message);
    }
}

// Calling an async function starts it. Its awaited work is resumed later
// through the Promise/microtask mechanism when each timer-backed Promise settles.
runPipeline();
