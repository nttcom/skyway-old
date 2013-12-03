/**
 * Created by yusuke on 2013/12/03.
 */
$(document).ready(function(){

    $("#regist").submit(function(event) {
        event.preventDefault();

        var $form = $(this);
        var $button = $form.find('submit');

        // 送信
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            timeout: 10000,

            beforeSend: function(xhr, settings) {
                // ボタンを無効化し、二重送信を防止
                $button.attr('disabled', true);
            },
            complete: function(xhr, textStatus) {
                // ボタンを有効化し、再送信を許可
                $button.attr('disabled', false);
            },
            success: function(result, textStatus, xhr) {
                window.location.href = 'accepted.html';
            },
            error: function(xhr, textStatus, error) {
                alert('エラーが発生しました。\nお手数ですが、もう一度最初からやり直してください。');
                $form[0].reset();
            }
        });

    });

});