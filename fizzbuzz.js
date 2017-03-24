module.exports = {

    main: function(start, end) 
    {
        if (isNaN(start) || isNaN(end))
        {
            throw new Error ('The start and end parameters need to be numbers');
        }

        let results = [];
        for (let i = start; i < end; i++)
        {
            results.push(this.fizzbuzz(i));
        }

        return results;
    },

    fizzbuzz: function(value)
    {
        if (value % 3 == 0 && value % 5 ==0) return 'FizzBuzz';
        else if (value % 3 == 0) return 'Fizz';
        else if (value % 5 == 0) return 'Buzz';
        else return value;
    }

};