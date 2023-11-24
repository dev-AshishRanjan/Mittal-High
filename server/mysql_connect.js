const mysql = require("mysql2");
const config = require("./config_sql");
const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  insecureAuth: config.insecureAuth,
  protocol: config.protocol,
});

connect();
//used to establish connection with the database
function connect() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("database Connected!");
  });
}

//register the complaint to the block
function registercomplaint(values, callback) {
  sql = " update block set complaints= ? where block_no = ? and room_no= ?";
  con.query(sql, values, (err, results) => {
    console.log(results);
    callback(err, results);
  });
}

//function to calculate total number of owners
function totalowner(callback) {
  sql = "SELECT COUNT(owner_id) FROM owner";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}

//get all the data from the table using table name
function getdata(tablename, callback) {
  sql = "select * from " + tablename + ";";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}

//add an owner tuple to the table
function createowner(values, callback) {
  sql = "insert into owner values(?,?,?,?,?,?)";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}
//function to create an owner
function createownerproof(values, callback) {
  sql = "insert into identity values(?,?,null);";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//book a parking slot for the tenant
function bookslot(values, callback) {
  sql = "update room set parking_slot =  ? where room_no = ?";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//view all the complaints
function viewcomplaints(callback) {
  sql = "select * from oo;";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}

//view only owner complaints
//dbms yuvarraj
function ownercomplaints(ownerid, callback) {
  sql =
    "select complaints,room_no from block where room_no in (select room_no from owner where owner_id in(select id from auth where user_id=?))";
  con.query(sql, ownerid, (err, results) => {
    callback(err, results);
  });
}

//get the total no of tenants
function totaltenant(callback) {
  sql = "SELECT COUNT(tenant_id) FROM tenant";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}
//get the total number of employees
function totalemployee(callback) {
  sql = "SELECT COUNT(emp_id) FROM employee";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}
//function to retrieve all the complaints in the block
function totalcomplaint(callback) {
  sql = "SELECT COUNT(complaints) FROM block";
  con.query(sql, (err, results) => {
    callback(err, results);
  });
}
//get the data of tenent
function gettenantdata(tid, callback) {
  sql =
    "select * from tenant where tenant_id in (select id from auth where user_id=?)";
  con.query(sql, tid, (err, results) => {
    callback(err, results);
  });
}

//creating an tenant id
function createtenant(values, callback) {
  sql = "insert into tenant values(?,?,?,null,?,?)";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//creating an proof for tenant
function createtenantproof(values, callback) {
  sql = "insert into identity values(?,null,?)";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}
function createuserid(values, callback) {
  sql = "insert into auth values(?,?,?)";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//owner viewing tenant details
function ownertenantdetails(values, callback) {
  sql =
    "select * from tenant where room_no in (select room_no from owner where owner_id in(select id from auth where user_id=?))";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}

//tenant pays maintanence fee
function paymaintanence(id, callback) {
  sql =
    'update tenant set stat="paid" where tenant_id in (select id from auth where user_id=?)';
  con.query(sql, id, (err, results) => {
    callback(err, results);
  });
}

//owner viewing room owned by him
function ownerroomdetails(values, callback) {
  sql =
    "select * from room where room_no in (select room_no from owner where owner_id in(select id from auth where user_id=?))";
  con.query(sql, values, (err, results) => {
    callback(err, results);
  });
}
//view parking alloted for tenant
function viewparking(id, callback) {
  sql =
    "select parking_slot from room where room_no in (select room_no from tenant where tenant_id in (select id from auth where user_id=?))";
  con.query(sql, id, (err, results) => {
    callback(err, results);
  });
}

//employee salary get
function empsalary(id, callback) {
  sql =
    "select salary from employee where emp_id in (select id from auth where user_id=?)";
  con.query(sql, id, (err, results) => {
    callback(err, results);
  });
}

//function to validate user with username and password
function authoriseuser(username, password, callback) {
  let results;
  sql = "SELECT password from auth where user_id = ?";
  const value = [username];
  console.log(value);
  con.query(sql, value, (err, result) => {
    if (result.length === 0) {
      results = "denied";
      callback(err, results);
      return;
    } else {
      const resultArray = Object.values(
        JSON.parse(JSON.stringify(result))[0]
      )[0];
      if (password === resultArray) {
        results = "granted";
      } else {
        results = "denied";
      }
      callback(err, results);
    }
  });
}

//tenant delete
function deletetenant(id, callback) {
  // First, delete referencing rows from 'rental'
  const deleteRentalQuery = "DELETE FROM rental WHERE tenant_id=?";
  con.query(deleteRentalQuery, id, (err, rentalResults) => {
    if (err) {
      callback(err, null);
    } else {
      // Next, delete referencing rows from 'identity' (assuming there's a foreign key)
      const deleteIdentityQuery = "DELETE FROM identity WHERE tenant_id=?";
      con.query(deleteIdentityQuery, id, (err, identityResults) => {
        if (err) {
          callback(err, null);
        } else {
          // Then, delete the row from 'tenant'
          const deleteTenantQuery = "DELETE FROM tenant WHERE tenant_id=?";
          con.query(deleteTenantQuery, id, (err, tenantResults) => {
            callback(err, tenantResults);
          });
        }
      });
    }
  });
}

//owner delete
function deleteowner(id, callback) {
  // First, delete referencing rows from 'identity'
  const deleteIdentityQuery = "DELETE FROM identity WHERE owner_id=?";
  con.query(deleteIdentityQuery, id, (err, identityResults) => {
    if (err) {
      callback(err, null);
    } else {
      // Then, delete the row from 'owner'
      const deleteOwnerQuery = "DELETE FROM owner WHERE owner_id=?";
      con.query(deleteOwnerQuery, id, (err, ownerResults) => {
        callback(err, ownerResults);
      });
    }
  });
}

//employee delete
function deleteemployee(id, callback) {
  // First, delete referencing rows from 'identity'
  const deleteIdentityQuery = "DELETE FROM identity WHERE emp_id=?";
  con.query(deleteIdentityQuery, id, (err, identityResults) => {
    if (err) {
      callback(err, null);
    } else {
      // Then, delete the row from 'owner'
      const deleteOwnerQuery = "DELETE FROM employee WHERE emp_id=?";
      con.query(deleteOwnerQuery, id, (err, ownerResults) => {
        callback(err, ownerResults);
      });
    }
  });
}

function deletecomplaint(id, callback) {
  sql = " update block set complaints=NULL  where room_no= ?";
  con.query(sql, id, (err, results) => {
    console.log(results);
    callback(err, results);
  });
}

module.exports = {
  connect,
  registercomplaint,
  createowner,
  bookslot,
  getdata,
  totalowner,
  totaltenant,
  totalemployee,
  totalcomplaint,
  createownerproof,
  viewcomplaints,
  authoriseuser,
  gettenantdata,
  createtenant,
  createtenantproof,
  ownerroomdetails,
  ownercomplaints,
  viewparking,
  createuserid,
  paymaintanence,
  empsalary,
  ownerroomdetails,
  ownertenantdetails,
  deletetenant,
  deleteowner,
  deleteemployee,
  deletecomplaint,
};
