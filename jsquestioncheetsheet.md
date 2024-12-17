/\*\*

- Problem: Object Transformation and Flattening
-
- You are given a complex nested object containing user information,
- and you need to create multiple transformations:
- 1.  Flatten the nested object
- 2.  Filter and transform the flattened object
- 3.  Group and aggregate data
      \*/

class ObjectTransformer {
/\*\*
_ Method 1: Flatten Nested Object
_ Converts a deeply nested object into a single-level object with dot-notation keys \*
_ Time Complexity: O(n), where n is the number of nested properties
_ Space Complexity: O(n) \*
_ @param {Object} obj - The nested object to flatten
_ @returns {Object} Flattened object
\*/
static flattenObject(obj) {
const result = {};

        // Recursive helper function to flatten object
        const flatten = (currentObj, prefix = '') => {
            for (const [key, value] of Object.entries(currentObj)) {
                const newKey = prefix ? `${prefix}.${key}` : key;

                // Recursively handle nested objects
                if (value && typeof value === 'object' && !Array.isArray(value)) {
                    flatten(value, newKey);
                } else {
                    result[newKey] = value;
                }
            }
        };

        flatten(obj);
        return result;
    }

    /**
     * Method 2: Filter and Transform Flattened Object
     * Filters objects based on specific conditions and transforms them
     *
     * Time Complexity: O(m), where m is the number of entries in the flattened object
     * Space Complexity: O(m)
     *
     * @param {Object} flattenedObj - The flattened object to transform
     * @returns {Object} Transformed and filtered object
     */
    static transformObject(flattenedObj) {
        return Object.entries(flattenedObj)
            .filter(([key, value]) => {
                // Keep only keys that match certain conditions
                return key.includes('user') &&
                       value !== null &&
                       value !== undefined;
            })
            .reduce((acc, [key, value]) => {
                // Transform keys and values
                const transformedKey = key.replace('user.', '');
                acc[transformedKey] = typeof value === 'string'
                    ? value.toUpperCase()
                    : value;
                return acc;
            }, {});
    }

    /**
     * Method 3: Group and Aggregate Data
     * Groups and aggregates data based on specific criteria
     *
     * Time Complexity: O(n), where n is the number of users
     * Space Complexity: O(k), where k is the number of unique groups
     *
     * @param {Array} users - Array of user objects
     * @returns {Object} Grouped and aggregated data
     */
    static groupAndAggregate(users) {
        return users.reduce((acc, user) => {
            // Group by age range and calculate statistics
            const ageGroup = Math.floor(user.age / 10) * 10;

            if (!acc[ageGroup]) {
                acc[ageGroup] = {
                    count: 0,
                    totalSalary: 0,
                    averageSalary: 0
                };
            }

            acc[ageGroup].count++;
            acc[ageGroup].totalSalary += user.salary;
            acc[ageGroup].averageSalary =
                acc[ageGroup].totalSalary / acc[ageGroup].count;

            return acc;
        }, {});
    }

    /**
     * Comprehensive Example Demonstrating All Methods
     */
    static runExample() {
        // Complex nested object
        const complexUser = {
            user: {
                personal: {
                    name: 'John Doe',
                    age: 35
                },
                professional: {
                    company: 'TechCorp',
                    salary: 75000
                }
            },
            metadata: {
                registrationDate: '2023-01-15'
            }
        };

        // Users array for grouping
        const users = [
            { name: 'Alice', age: 25, salary: 50000 },
            { name: 'Bob', age: 35, salary: 75000 },
            { name: 'Charlie', age: 45, salary: 100000 }
        ];

        console.log('Flattened Object:', this.flattenObject(complexUser));
        console.log('Transformed Object:', this.transformObject(this.flattenObject(complexUser)));
        console.log('Grouped Users:', this.groupAndAggregate(users));
    }

}

// Run the example
ObjectTransformer.runExample();

// Export for potential module usage
module.exports = ObjectTransformer;
