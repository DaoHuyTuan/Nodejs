require('../models/PhepTinh');
module.exports = (req, res) => {
    const { tenPhepTinh, soa, sob } = req.params;
    const pt = new PhepTinh(tenPhepTinh, soa, sob);
    res.send(pt.getResultString());
}