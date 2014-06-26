/**
 * Created by Johnson on 6/26/14.
 *
 */
var dbConfig = {
    user: 'sa',
    password: 'W.007',
    server: '180.168.36.241',
    database: 'testDB'
};
var sql = new require('mssql');
var sqlMapping = require('./sqlmapping');

exports.get = function (mappingName, callback, params) {
    sql.connect(dbConfig, function () {
        var request = new sql.Request();
        if (params != undefined) {
            for (var param in params) {
                request.input(param, params[param]);
            }
        }
        request.query(sqlMapping[mappingName], function (err, recordset) {
            return callback(err, JSON.stringify(recordset));
        });
    })
};


