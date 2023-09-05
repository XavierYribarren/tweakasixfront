const {dbPool : db} = require('./dbController')


const getItems = (req, res) => {
  const sqlSelect = "SELECT * FROM parts WHERE spare = 1";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
};



const getVariation = (req, res) => {
  const sqlSelect = "SELECT * FROM part_variations"
  db.query(sqlSelect, (err, result)=> {
    res.send(result)
  })
}




module.exports = { getItems, getVariation };
