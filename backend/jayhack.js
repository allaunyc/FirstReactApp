// It worked!
// Ok so what I did is that, I first stoppped the nodemon and do npm run server again.
//
// Whenever we modify package.json, we need to restart the server regardless of whether
// we are using nodemon or not
//
// Then it worked, but it does not recognize import ... from .. syntax.
// This is because import .. from .. syntax is a new feature in javascript
// and is not supported in node version 6 (I believe it's supported in version 7)
// So we need to install babel-cli and run nodemon with babel-node just
// like what we did with homazon
