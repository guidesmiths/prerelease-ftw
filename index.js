module.exports = function(version, tag, number) {
    var parts = version.split(/[\.\-\+]/g)
    return parts[0] + '.' + parts[1] + '.' + parts[2] + '-' + tag + '.' + number
}