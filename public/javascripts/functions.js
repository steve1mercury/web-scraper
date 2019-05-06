$(document).ready(() => {

        $('#btnSubmit').on("click", (evt) => {
            //Some code
            console.log('in click event');
            /*
            $('#input.urls').each(function(index) {
                console.log($this.value());
                $('#results').prepend('<li>' + $this.value() + "</li>");
            })
            */
            $('#results').empty();
            var urls = new Array();
            $('input[type=text].urls').each(function () {
                if ($(this).val() != null && $(this).val() != '') {
                    console.log($(this).val());
                    urls.push($(this).val());
                    //$('#results').append('<li>' + $(this).val() + "</li>");
                }
            });

            if (urls.length > 0) {
                $.ajax({
                    type: 'POST',
                    data: JSON.stringify(urls),
                    contentType: 'application/json',
                    url: 'http://localhost:3000/fetchit',
                    success: function (data) {
                        console.log('success');
                        console.log(data);
                        /*
                        console.log(data.length);
                        $.each(data, function (key, value) {
                                console.log("key: " + key + " value: " + value);
                            }
                        )
                        */
                        $('#results').append('<li>' + data.message + "</li>");
                    },
                    error: function () {
                        console.log('error');
                    }
                });

            } else {
                $('#results').append('<li>You must enter at lease one URL</li>');
            }


        });
    }
)