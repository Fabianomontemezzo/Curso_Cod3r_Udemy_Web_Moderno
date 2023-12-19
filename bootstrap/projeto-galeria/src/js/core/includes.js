import $ from 'jquery'

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include').each(function(i, e) {
        const url = $(e).attr('[wm-include')
        $.ajaxPrefilter({
            url,
            sucess(data) {
                $(e).html(data)
                $(e).removeAttr('[wm-include]')

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()