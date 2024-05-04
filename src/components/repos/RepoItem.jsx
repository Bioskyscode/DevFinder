import PropTypes from 'prop-types'

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo
    return (
        <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
            <div className='card-body'>
                <h3 className='mb-2 text-xl font-semibold'>
                    <a href={html_url} target='_blank' rel='noreferrer'><i className="fa-solid fa-link inline mr-4"></i>{name}</a>
                </h3>
                <p className='mb-3'>{description}</p>
                <div>
                    <div className='mr-2 mb-2 badge badge-info badge-lg'>
                        <i className="fa-regular fa-eye mr-2"></i>{watchers_count}
                    </div>
                    <div className='mr-2 badge badge-success badge-lg'>
                    <i className="fa-solid fa-star mr-2"></i>{stargazers_count}
                    </div>
                    <div className='mr-2 badge badge-error badge-lg'>
                    <i className="fa-solid fa-info mr-2"></i>{open_issues}
                    </div>
                    <div className='mr-2 badge badge-warning badge-lg'>
                    <i className="fa-solid fa-code-fork mr-2"></i>{forks}
                    </div>
                </div>
            </div>
        </div>
    )
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem