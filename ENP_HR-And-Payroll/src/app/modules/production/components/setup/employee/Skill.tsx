import { Button, Input, Modal, Space, Table } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { KTCardBody, KTSVG } from '../../../../../../_metronic/helpers'
import { Api_Endpoint, updateSkill } from '../../../../../services/ApiCalls'
import { useQueryClient, useMutation } from 'react-query'
import { SetupComponent } from '../CommonSetupComponent'

const Skill = () => {
  const data = {
    title: 'Skills',
    url: 'Skills',
  }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { Skill }

