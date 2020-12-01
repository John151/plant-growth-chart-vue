module.exports = (sequelize, DataTypes) => {
    let PlantRecord = sequelize.define('PlantRecord', {
        height: {
            type: DataTypes.NUMBER,
            allowNull: false
        }, date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
    PlantRecord.sync({force: false}).then( () => {
        console.log('synced plant record table')
    })
    return PlantRecord
}