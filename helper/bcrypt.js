import bcrypt from 'bcrypt';

export function hashPassword (userPassword) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

export function comparePassword(userPassword, hashedPassword) {
    return bcrypt.compareSync(userPassword, hashedPassword);
}