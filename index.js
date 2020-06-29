const{ registerBlockType }=wp.blocks;

const{ MediaUpload }=wp.editor;

const{ Button }=wp.components;


registerBlockType('mayank/custom-cta',{
    title:'image block',
    description:'block to generate a custom image block',
    icon:'format-image',
    category:'layout',

    attributes:{
        imgURL:{
            type:'string',
            source:'attribute',
            attribute:'src',
            selector:'img'
        },
        imgID:{
            type:'number'
        },
        imgALT:{
            type:'string',
            source:'attribute',
            attribute:'alt',
            selector:'img'
        }
    },


    edit:function(props){
        
        const onFileSelect=(img) =>{
            props.setAttributes({
                imgURL:img.url,
                imgID:img.id,
                imgALT:img.alt
            });
        }

        const onRemoveImg=()=>{
            props.setAttributes({
                imgURL:null,
                imgID:null,
                imgALT:null
            });
        }

        return (
            <div className="media-wrapper">
            {
                (props.attributes.imgURL)? (
                    <div className="img-upload-wrapper">
                    <img
                    src={props.attributes.imgURL}
                    alt={props.attributes.imgALT}
                    />
                    {   //this is used to check if the image is selected and if we wants to remove the image 
                        (props.isSelected) ? (
                            <Button
                                onClick={onRemoveImg}
                            >
                            Remove
                            </Button>
                        ):null}
                    </div>
                ):(
                    <MediaUpload
                            onSelect={onFileSelect}
                            value={props.attributes.imgID}
                            render={({open})=>
                                <Button 
                                className="button"
                                onClick={open}
                                >
                                    Open Library
                                </Button>
                }
                />
                )
            }
                
            </div>
        );
    },

    save:function(props){
        return (
            <div className="img-wrapper">
                <img
                    src={props.attributes.imgURL}
                    alt={props.attributes.imgALT}
                />
            </div>
        );
    },

})