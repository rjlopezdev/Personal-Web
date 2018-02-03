$(document).ready(function() {

    // Inject acreditation image modal
    $('#injection-modal-container').append(
        `
        <div class="modal fade" id="acreditation-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">

                    <!-- Modal header -->
                    <div class="modal-header">
                        <h5 class="modal-title" id="acreditation-title"> </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <!-- Acreditation image container -->
                    <div id="acreditation-container" class="modal-body"> </div>
                    
                </div>
            </div>
        </div>
        `
    );
})

function showAcreditationModal(title, image) {

    // Set title modal
    $('#acreditation-title').text(`${title} acreditation`)

    // Inject image or message
    if(image !== 'undefined') {

        // Remove previous data
        $('#no-image-message').remove();
        $('#acreditation-image').remove();

        // Show preloader
        $('#acreditation-container').append(
            `
            <div id="image-loader" class="text-center">
                <i class="fas fa-5x fa-spinner fa-spin"></i>
            </div>
            `
        );

        // Inject acreditation image if exists and remove message
        $('#acreditation-container').append(
            `
            <img id="acreditation-image" src="${image}" alt="" class="img-fluid">
            `
        );

        // Remove preloader when acreditation image is load
        $('#acreditation-image').on('load', function() {
            $('#image-loader').remove();
        });

    } else {

        //Remove previous data
        $('#no-image-message').remove();
        $('#acreditation-image').remove();

        // Inject no acreditation message if not image and remove image and previous messages
        $('#acreditation-container').append(
            `
            <div id="no-image-message" class="text-center">
                <i class="far fa-5x fa-frown mx-auto"></i>
                <h2> Ops! I don't have this acreditation file </h2>
            </div>
            `
        );
    }

    // Show modal
    $('#acreditation-modal').modal('show');
}