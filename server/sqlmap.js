// sqlMap.js
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(name, age) values (?,?)',
        select_name: 'SELECT * from user where username = ?',    //查询 username
        select_password: 'SELECT * from user where password = ?'      //查询 password
    },
    // 招聘
    ticket: {
        add: 'INSERT INTO ticket.history (ph,plx,fzr,qfr,dd,cz,mc,nr) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        getfgrw: 'SELECT * from work where ph = ? and plx = ?',
        getwxd: 'SELECT * from warn where ph = ? and plx = ? and iszy = 0',
        getzy: 'SELECT * from warn where ph = ? and plx = ? and iszy = 1',
        search: 'select * from history where ph = ? and plx = ?',
        delfgrw: 'delete from work where ph = ? and plx = ? and fg = ?',
        delwxd: 'delete from wran where ph = ? and plx = ?  and iszy = 0 and zywx=?',
        delzy: 'delete from warn where ph = ? and plx = ? and iszy = 1 and zywx=?'
    }
}

module.exports = sqlMap;