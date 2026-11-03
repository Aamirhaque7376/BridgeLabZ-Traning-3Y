// Q4 – DevOps Delay: Async Timeout Race

function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has a 15% chance of failing.
            if (Math.random() < 0.15) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                console.log(`${serverName} deployment completed.`);
                resolve(`${serverName} responded`);
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all succeeds only when both server Promises succeed.
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment error:", error.message));

// Promise.race settles as soon as the first Promise settles.
// With successful responses, Server A is expected to respond first.
Promise.race([
    deployServer("Server A (race check)", 2000),
    deployServer("Server B (race check)", 3000)
])
    .then(firstResponse => console.log("Fastest response:", firstResponse))
    .catch(error => console.error("Race failed:", error.message));
