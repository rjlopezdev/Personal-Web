$(document).ready(function() {
    $.getJSON('../data/studies.json', function(studies) {
        
        //Iterate studies
        studies.forEach(function(study, index) {
            var type = (study.type === 'schooling')
                ? 'success'
                : 'info';
            var type_text = (study.type === 'schooling')
                ? 'Schooling'
                : 'Course';

            $('#studies-container').append(
                `
                <div class="card border-success mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12">

                                <!-- Study title -->
                                <h4 class="card-title">${study.degree}
                                    <span class="badge badge-${type}">${type_text}</span>
                                </h4>

                            </div>
                        </div>

                        <!-- Academy and location -->
                        <h6 class="card-subtitle mb-2 text-muted">${study.academy} | ${study.location}</h6>
                        <p class="card-text text-justify"> ${study.description}</p>

                        <!-- Links container -->
                        <div id="links-container-${index}" class="row"> </div>

                        <!-- Acreditation container -->
                        <div class="row justify-content-end">

                            <!-- Image acreditacion link -->
                            <button role="button" class="btn btn-outline-success project-link"
                                    onclick="showAcreditationModal('${study.degree}', '${study.acreditation_image}')">
                                Acreditation
                                <i class="fas fa-id-card" aria-hidden="true"></i>
                            </button>

                        </div>
                    </div>
                </div>
                <br>
                `
            );

            //Iterate links
            study.info_links.forEach(function(link){
                $(`#links-container-${index}`).append(
                    `
                    <div class="col-sm-6">
                        <a href="${link.link}" class="card-link"> ${link.title} </a>
                    </div>
                    `
                );
            });

            //Content loaded
            $('#studies-preloader').remove();
        });
    })
})