import $ from 'jquery'

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(index, element){
        const url = $(element).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(element).html(data) //inclui o valor do html
                $(element).removeAttr('wm-include') //remove para que não seja interpretado novamente

                loadIncludes(element)
            }
        })
    })
}

loadIncludes()