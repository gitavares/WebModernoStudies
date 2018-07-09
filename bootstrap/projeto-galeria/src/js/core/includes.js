import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(index, element){
        const url = $(element).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(element).html(data) //inclui o valor do html
                $(element).removeAttr('wm-include') //remove para que não seja interpretado novamente

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))

                loadIncludes(element)
            }
        })
    })
}

loadIncludes()