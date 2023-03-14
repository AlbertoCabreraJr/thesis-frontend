import { useNavigate, useParams } from 'react-router-dom'
import LayoutWithoutNavigation from '../../components/LayoutWithoutNavigation'
import { modules } from '../../utils/mockData'
import TopicList from './TopicList'

const ModulePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  if (!id) return null

  // temporary
  const module = modules[parseInt(id) - 1]

  return (
    <LayoutWithoutNavigation onClickBack={() => navigate(-1)}>
      <div className='module-page'>
        <div className='module-page-header'>
          <div className='module-page-title-container'>
            <div className='module-title'>{module.title}</div>
            <div className='module-subtitle'>{module.subtitle}</div>
          </div>
          <div className='module-progress'>
            Progress: {module.progress}/{module.totalTopicsAndExam}
          </div>
        </div>
        <TopicList topics={module.topics} />
      </div>
    </LayoutWithoutNavigation>
  )
}

export default ModulePage