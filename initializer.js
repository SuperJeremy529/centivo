
const aliases = require('module-alias/register');
const mongoConnection = require('@framework/mongoDBConnection');
const User = require('@applications/users/models');
const users = require('@root/mockUsers');

(async () => {
  try {
    await mongoConnection();
    await writeTestUsers();
    console.log('command run successfully');
    process.exit(0);
  } catch (error) {
    
    console.error('An error occurred:', error);
    process.exit(1);
  }
})();

async function writeTestUsers() {
  try {
    const response = await User.insertMany(users);
    console.log('Users written successfully')
  } catch (error) {
    console.error('Error writing users:', error);
  }
}
