
class PhepTinh {
    constructor(tenPhepTinh, soa, sob) {
        this.tenPhepTinh = tenPhepTinh;
        this.soa = soa;
        this.sob = sob;
    }

    getResultString() {
        const expression = this.getExpression();
        const kq = eval(expression);
        return `${expression} = ${kq}`;
    }

    getExpression() {
        const { soa, sob } = this;
        if (this.tenPhepTinh === 'CONG') return `${soa} + ${sob}`;
        if (this.tenPhepTinh === 'TRU') return `${soa} - ${sob}`;
        if (this.tenPhepTinh === 'NHAN') return `${soa} * ${sob}`;
        return `${soa} / ${sob}`;
    }
}
module.exports = PhepTinh;


