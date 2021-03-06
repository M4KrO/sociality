import axios, { AxiosResponse } from 'axios';
import { ActionTypes } from './ActionTypes';
import { ResultCode } from '../../ResultCode';
import ConversationsState from '../../states/ConversationsState';

export const loadConversations: any = (token: string) => {
	return (dispatch: Function) => {
		axios.get(`/api/conversations/${token}`).then((response: AxiosResponse) => {
			dispatch({
				type: ActionTypes.LOAD_CONVERSATIONS,
				payload: {
					...response.data
				}
			});
		}).catch(() => {
			dispatch({
				type: ActionTypes.LOAD_CONVERSATIONS,
				payload: new ConversationsState(ResultCode.CONNECTION_ERROR)
			});
		});
	};
};

export const loadMessages: any = (conversationId: number, oldest: number, token: string) => {
	return (dispatch: Function) => {
		const params: {} = {
			oldest: oldest,
			limit: 3
		};
		axios.get(`/api/conversations/${conversationId}/${token}`, { params: params }).then((response: AxiosResponse) => {
			dispatch({
				type: ActionTypes.LOAD_MESSAGES,
				payload: {
					...response.data
				}
			});
		}).catch(() => {
			dispatch({
				type: ActionTypes.LOAD_MESSAGES,
				payload: new ConversationsState(ResultCode.CONNECTION_ERROR)
			});
		});
	};
};

export const resetMessages: any = () => {
	return (dispatch: Function) => {
		dispatch({
			type: ActionTypes.RESET_MESSAGES
		});
	};
};

export const resetConversations: any = () => {
	return (dispatch: Function) => {
		dispatch({
			type: ActionTypes.RESET_CONVERSATIONS
		});
	};
};
