const sentence = "hello there from lighthouse labs";

for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index])
  }, 50 * index);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 50 * sentence.length);