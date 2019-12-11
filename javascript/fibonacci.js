Array.prototype.fibonacci = function (n) {
    n = n ? n : 1;
    this.push( this[ this.length - 2 ] ? this[ this.length - 2 ] + n : n );
    return (n < 1000000) ? this.fibonacci(this[this.length - 1]) : this;
}

//[].fibonacci();