const contentArray = ['\r|    ', '\r/    ', '\r-    ', '\r\\    '];

for (let i = 0; i < 50; i++) {
  let content = contentArray[i % 4];
  setTimeout(() => { 
    process.stdout.write(content);
  }, 100 + i * 200);
}
